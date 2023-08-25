// @ts-nocheck

import NodeCG from '@nodecg/types';

export = (nodecg: NodeCG.ServerAPI) => {
    nodecg.Replicant<string>('exampleReplicant', { defaultValue: 'example' });
};
