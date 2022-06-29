import { NativeModules } from 'react-native';

type XhDemoModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { XhDemoModule } = NativeModules;

export default XhDemoModule as XhDemoModuleType;
