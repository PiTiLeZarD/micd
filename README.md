# MICD

Look, I want to say I'm doing a clone of minecraft using three.js and react, but we both know it's not gonna happen.

So here is just a playground with minecraft in mind just so I toy around with things I've never done before.

Demo is available here:

http://PiTiLeZarD.github.io/micd

If you want to run it as a desktop app:

```bash
yarn tauri dev
```

## TODO

I'm taking it one step at a time. So for now:

### immediate improvements

-   chunk cache after generation
-   optimise to take other chunks into account using the cache
-   generateChunk should have more rules to pepper ores and other blocks
-   check if there is an advantage for a brick to not display a cube but only the visible faces
-   should we have an algorithm that merge bricks? Instead of a 4x4 grass blocks, a 1x1 grass face with a 4 scale? Seems tricky but now it's on the todo list ;)

### long term milestones

-   camera controlled by keyboard
-   terrain generation across chunks
-   physics
-   mining?
-   crafting?
