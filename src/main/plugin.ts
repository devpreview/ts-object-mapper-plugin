import * as ts_module from "typescript/lib/tsserverlibrary";

export function init(modules: { typescript: typeof ts_module }) {
    const ts = modules.typescript;
    /* More to come here */
    console.log('=== INIT OBJECT MAPPER PLUGIN ===')
}
