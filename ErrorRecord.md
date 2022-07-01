# 错误记录、报错信息及解决

## iOS
1.在初始化项目之后，执行yarn example ios后报错

操作步骤：
  npx @react-native-community/bob create react-native-xh-demo-module
  yarn
  yarn bootstrap
  yarn example ios

终端报错信息：
** BUILD FAILED **
The following build commands failed:
	CompileC /Users/xxx/Library/Developer/Xcode/DerivedData/XhDemoModuleExample-aeenbshzbcxyhhbxxxxvjonsgh/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/Flipper.build/Objects-normal/arm64/FlipperRSocketResponder.o /Users/huangchengrui/Documents/Project/My/ReactNative/react-native-xh-demo-module/example/ios/Pods/Flipper/xplat/Flipper/FlipperRSocketResponder.cpp normal arm64 c++ com.apple.compilers.llvm.clang.1_0.compiler (in target 'Flipper' from project 'Pods')
(1 failure)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

XCode运行报错信息：
/Users/xxx/Documents/Project/My/ReactNative/react-native-xh-demo-module/example/ios/Pods/Headers/Public/libevent/event.h:44:10: 'event2/event-config.h' file not found

原因分析：
通过报错终端的报错信息，可以大概知道是Flipper这块出了问题，去查看Podfile文件，大概就能知道出问题的原因了

解决办法：
文件目录 - react-native-xh-demo-module - example - ios
Podfile文件中注释以下代码块
use_flipper!
post_install do |installer|
  flipper_post_install(installer)
end
重新执行pod install后运行即可



2.执行上面的步骤之后可能还会存在其他错误，发现命令无法运行iOS项目，XCode却可以

操作步骤：
yarn example ios

终端报错信息：
Requested but did not find extension point with identifier Xcode.IDEKit.ExtensionPointIdentifierToBundleIdentifier for extension Xcode.DebuggerFoundation.AppExtensionToBundleIdentifierMap.watchOS of plug-in com.apple.dt.IDEWatchSupportCore

解决办法：
sudo xcode-select -s /Library/Developer/CommandLineTools
xcode-select --install  （上面如果提示找不到文件，再执行该命令）

3.这时候执行完上面命令后还可能出错，无法使用终端运行example

操作步骤：
yarn example ios

报错信息：
error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening XhDemoModuleExample.xcworkspace. Run CLI with --verbose flag for more details

解决办法：
目前没有解决终端运行example的问题，可以采用XCode直接运行即可