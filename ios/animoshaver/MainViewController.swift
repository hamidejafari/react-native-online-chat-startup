
import UIKit

class MainViewController: UIViewController {

}

extension MainViewController {
  override func viewDidAppear(_ animated: Bool) {

  }
  
  override func viewDidLoad() {
    super.viewDidLoad()

    let jsCodeLocation: URL
    
    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil)
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "animoshaver", initialProperties: nil, launchOptions: nil)
    self.view = rootView
    
  }
  
  override func viewWillAppear(_ animated: Bool) {
    super.viewWillAppear(animated)
    
    self.navigationController?.isNavigationBarHidden = true
    
   
  }
}
