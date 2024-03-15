import { ActionMeta, GroupBase, MultiValue, Props, SingleValue } from 'react-select';

export interface SelectOption {
  label: string | number; // The label to be displayed for the option.
  value: string | number; // The value associated with the option.
  disabled?: boolean; // (optional) Specifies if the option is disabled or not.
}
export interface SelectProps
  extends Omit<Props<SelectOption, boolean, GroupBase<SelectOption>>, 'size'> {
  /**
   * Test identifier for the component.
   */
  testId: string;
  isVirtualized?: boolean;
  isPortal?: boolean;
  /**
   * Array of options for selection.
   */
  options?: SelectOption[] | undefined;

  /**
   * Additional helper text for the component.
   */
  helperText?: string;

  /**
   * Error text for the component.
   */
  errorText?: string;
  isInvalid?: boolean;

  /**
   * Label for the component.
   */
  label?: string;

  /**
   * Callback function called when the selected value(s) change.
   * @param newValue - The new selected value(s).
   * @param actionMeta - Additional information about the action that triggered the change.
   */
  onChange?: (
    newValue: MultiValue<SelectOption> | SingleValue<SelectOption>,
    actionMeta: ActionMeta<SingleValue<SelectOption> | MultiValue<SelectOption>>
  ) => void;

  /**
   * Indicates whether the component has a radio option.
   */
  hasRadioOption?: boolean;

  /**
   * Callback function called when the user wants to add a new item.
   */
  addItemHandler?: () => void;

  /**
   * Label for the "add item" functionality.
   */
  addItemLabel?: string;

  /**
   * Placeholder text for the component.
   */
  __placeholder?: string;
  /**
   *isRequired indicates if the item is required (optional)..
   */
  isRequired?: boolean;
}
