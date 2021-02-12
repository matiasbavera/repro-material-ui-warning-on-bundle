import React from 'react';
import Typography from '@material-ui/core/Typography';


// export interface ConfirmationAlertDialogProps extends Omit<AlertDialogProps, 'title' | 'variant'> {
//   title?: string;
// }

/**
 * A specialized `AlertDialog` for confirmation messages.
 */
export const ConfirmationAlertDialog = (props:any): JSX.Element => {
  const { title, positiveText, negativeText, ...otherProps } = props;
  return (
    <Typography>test</Typography>
    // <AlertDialog
    //   title={title || 'Are you sure you want to continue?'}
    //   positiveText={positiveText || 'OK'}
    //   negativeText={negativeText || 'Cancel'}
    //   variant="warn"
    //   {...otherProps}
    // />
  );
};

export default ConfirmationAlertDialog;
