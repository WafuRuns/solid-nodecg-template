import NodeCG from '@nodecg/types';
import { createEffect, createSignal, createMemo, onCleanup } from 'solid-js';

function hasDefaultValue<D>(
    options: NodeCG.Replicant.Options<D>
): options is NodeCG.Replicant.OptionsWithDefault<D> {
    return 'defaultValue' in options;
}

export function createReplicant<T>(
    name: string,
    namespace?: string
): [() => T | undefined, (val: T) => any];
export function createReplicant<T>(
    name: string,
    namespace: string | undefined,
    opts: NodeCG.Replicant.Options<T>
): [() => T, (val: T) => any];
export function createReplicant<T>(
    name: string,
    namespace?: string,
    opts?: NodeCG.Replicant.Options<T>
) {
    const replicant = createMemo(
        () =>
            typeof namespace === 'string'
                ? nodecg.Replicant(name, namespace, opts)
                : nodecg.Replicant(name, opts),
        [name, namespace, opts]
    );

    const [val, setVal] = createSignal(
        opts && hasDefaultValue(opts) ? opts.defaultValue : null
    );

    createEffect(() => {
        const listener = (newVal: T) => {
            setVal(() => newVal);
        };
        const replicantInstance = replicant();
        replicantInstance.on('change', listener as any);
        onCleanup(() => {
            replicantInstance.removeListener('change', listener as any);
        });
    });

    const setter = (newValue: T) => {
        replicant().value = newValue;
    };

    return [val, setter] as const;
}
