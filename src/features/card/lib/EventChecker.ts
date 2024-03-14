export class EventChecker {
  static checkIsDeleteInputType(nativeEvent: InputEvent) {
    return nativeEvent.inputType === 'deleteContentBackward';
  }
}
