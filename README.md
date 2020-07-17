# Example Angular Schematics

## Install

```bash
  # Install
  $ npm i -g @angular-devkit/schematics-cli
```

## Schematic Project

```bash
  # create blank schematic project
  $ schematics blank --name=my-schematics

  # build
  $ npm run build
```

## Angular Project

```bash
  # create project
  ng new angular-project

  # link project with schematic
  $ npm link ../my-schematics

  # run schematic in angular project
  $ ng g my-schematics:my-schematics
  $ ng g my-schematics:my-component foo/bar/lol
```

## References

- https://www.youtube.com/watch?v=zoytvenOLmE&t=174s
- https://medium.com/@ricardo.mello/schematics-criando-um-gerador-de-c%C3%B3digos-com-angular-introdu%C3%A7%C3%A3o-23fcad8e4ddb
