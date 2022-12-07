package com.wheatherapp.devicepusher

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import android.provider.Settings.Global.getString
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.core.content.ContextCompat.getSystemService
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.wheatherapp.R

class DevicePusherModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    init {
        createNotificationChannel()
    }

    companion object {
        const val CHANNEL_ID = "default"
    }

    override fun getName() = "DevicePusherModule"

    @ReactMethod
    fun requestPermission(promise: Promise) {
        promise.resolve(true)
    }

    @ReactMethod
    fun fireNotification(title: String, message: String, id: Int) {
        val builder = NotificationCompat.Builder(reactApplicationContext, CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_notification)
            .setContentTitle(title)
            .setContentText(message)
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setAutoCancel(true)

        with(NotificationManagerCompat.from(reactContext)) {
            notify(id, builder.build())
        }
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = reactContext.getString(R.string.channel_name)
            val descriptionText = reactContext.getString(R.string.channel_description)
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
            }
            // Register the channel with the system
            val notificationManager: NotificationManager? =
                getSystemService(reactApplicationContext, NotificationManager::class.java)
            notificationManager?.createNotificationChannel(channel)
        }
    }
}