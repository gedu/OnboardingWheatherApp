//
//  DevicePusherModule.m
//  WheatherApp
//
//  Created by Eduardo Graciano on 18/11/2022.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(DevicePusherModule, NSObject)

  RCT_EXTERN_METHOD(requestPermission: (RCTPromiseResolveBlock) resolve
                    rejecter: (RCTPromiseRejectBlock) reject)

  RCT_EXTERN_METHOD(fireNotification:(NSString *)title message:(NSString *)message id:(NSNumber *)id)
@end


