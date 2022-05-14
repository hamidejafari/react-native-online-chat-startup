import Foundation

import UIKit
import Firebase
//import KavenegarCall
import CallKit


//var kavenegarCall : KavenegarCall {
  //  return KavenegarCall.instance
//}

@UIApplicationMain
@objc class AppDelegate: UIResponder, UIApplicationDelegate {
  
  var window: UIWindow?
  var bridge: RCTBridge!
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    
    //KavenegarCall.initialize(environment: .production)

    FirebaseApp.configure()
 
    //GMSServices.provideAPIKey("AIzaSyCaRI4ixkHadiMQM7IknjzS0PCWAXMHR30")
    
  
    self.window = UIWindow(frame: UIScreen.main.bounds)
    let rootViewController = MainViewController()

    self.window!.rootViewController = rootViewController;
    self.window?.makeKeyAndVisible()
    
    return true
  }
}
