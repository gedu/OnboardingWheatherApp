//
//  DevicePusherModule.swift
//  WheatherApp
//
//  Created by Eduardo Graciano on 18/11/2022.
//

import Foundation
import UserNotifications

@objc(DevicePusherModule)
class DevicePusherModule: NSObject {
  let userNotificationCenter: UNUserNotificationCenter
  
  override init() {
    self.userNotificationCenter = UNUserNotificationCenter.current()
  }
  
  // true to initialize the module in them Main Thread, false on a Background Thread
  @objc static func requiresMainQueueSetup() -> Bool { return false }
  
  @objc
  public func requestPermission(_ resolve: @escaping RCTPromiseResolveBlock,
                                      rejecter reject: @escaping RCTPromiseRejectBlock) {

    let authOptions = UNAuthorizationOptions.init(arrayLiteral: .alert, .badge, .sound)
    self.userNotificationCenter.requestAuthorization(options: authOptions) { (success, error) in
            if error != nil {
              reject("0", "requestPermission", nil)
            } else {
              resolve("requestPermission")
            }
        }
  }
  
  @objc(fireNotification:message:id:)
  public func fireNotification(title: String, message: String, id: Int) {
    let notificationContent = UNMutableNotificationContent()

    notificationContent.title = title
    notificationContent.body = message
    notificationContent.badge = NSNumber(value: id)
    
    let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 5,
                                                    repeats: false)
    
    let request = UNNotificationRequest(identifier: "testNotification",
                                        content: notificationContent,
                                        trigger: trigger)
    
    self.userNotificationCenter.add(request) { (error) in
        if let error = error {
            print("Notification Error: ", error)
        }
    }
  }
}
