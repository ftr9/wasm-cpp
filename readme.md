## c++ code running in webassembly vs js code

# How was this possible ?

# With Emscripten SDK

Emscripten takes c++ code and generates c++ code in an optimized web assembly version and js file to glue that
wasm code to frontend

## How to generate your c++ wasm code with emscripten ?

```
    cd wasm
    emcc -O2 square.cpp -o square.js -s "EXPORTED_FUNCTIONS=['_square']" -s "EXPORTED_RUNTIME_METHODS=['cwrap']"
```
