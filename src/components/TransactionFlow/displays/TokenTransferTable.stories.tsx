import { ComponentProps } from 'react';

import { fSettings, fValueTransfers } from '@fixtures';

import { TokenTransferTable } from './TokenTransferTable';

const defaultProps: ComponentProps<typeof TokenTransferTable> = {
  settings: fSettings,
  valueTransfers: fValueTransfers.map(t => ({ ...t, rate: 0.1, toContact: undefined, fromContact: undefined }))
};

export default { title: 'Organisms/TokenTransferTable', component: TokenTransferTable };

export const Default = () => {
  return <TokenTransferTable {...defaultProps} />;
};