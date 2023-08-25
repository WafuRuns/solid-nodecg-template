import { createReplicant } from '../../common/createReplicant';

const App = () => {
    const [value, setValue] = createReplicant<string>('exampleReplicant');

    return <>{value()}</>;
};

export default App;
