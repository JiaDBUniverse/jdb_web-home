import { Surreal } from 'surrealdb';
import { surrealdbWasmEngines } from '@surrealdb/wasm';

// Enable the WebAssembly engines
const db = new Surreal({
    engines: surrealdbWasmEngines(),
});

// Now we can start SurrealDB as an in-memory database
await db.connect("mem://");
// Or we can start a persisted IndexedDB database
await db.connect("indxdb://demo");