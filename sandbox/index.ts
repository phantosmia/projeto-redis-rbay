import 'dotenv/config';
import { client } from '../src/services/redis';


const commands = [1, 2, 3].map((id) => {
    return client.hGetAll(`car${id}`);
});

const run = async () => {
    await client.hSet('car1', {
        color: 'red',
        year: 1950,
        engine: {cylinders: 8},

    });
    await client.hSet('car2', {
        color: 'yellow',
        year: 1955,
        engine: {cylinders: 8},

    });
    await client.hSet('car3', {
        color: 'blue',
        year: 1970,
        engine: {cylinders: 8},

    });
    const results = await Promise.all(commands)
    console.log(results);

};
run();
