# Monster Truck GLB – Web Developer Documentation

## 1. Scene Overview

This GLB contains a 3D monster truck scene with two different chassis/color variants, a shared frame, wheels, rims, and a small color library.

The file is structured as a glTF 2.0 scene exported from Blender. The scene contains geometry and materials, but it does not contain a camera, exported lights, or animations.

### General file contents

| Property | Value |
|---|---|
| File format | GLB / glTF 2.0 |
| Scene name | `Scene` |
| Exporter | Blender `Khronos glTF Blender I/O v5.2.39` |
| Nodes | 12 |
| Meshes | 12 |
| Materials | 24 |
| Texture entries | 30 |
| Embedded image resources | 26 |
| Embedded image format | WebP |
| Animations | 0 |
| Cameras | 0 |
| Exported glTF lights | 0 |
| File size | Approximately 6.93 MB |
| Embedded resources | Yes |

The GLB uses the following glTF extensions:

- `EXT_texture_webp` — used and required
- `KHR_texture_transform` — used and required
- `KHR_materials_transmission`
- `KHR_materials_emissive_strength`
- `KHR_materials_specular`
- `KHR_materials_ior`

The material-related extensions are used by materials in the file. The exact browser/runtime support should therefore be verified in the target Three.js or React Three Fiber setup.

---

## 2. Objects and Naming Conventions

The GLB contains the following exported scene nodes. Names are preserved exactly as they appear in the file.

| Object | Type | Parent | Description | Interaction potential |
|---|---|---|---|---|
| `Chassi_Bubble_Color` | Mesh / node | `Scene` | Bubble chassis color component | Potentially used as a configurable chassis/color component; exact interaction logic is not defined in the file |
| `Chassi_Bubble` | Mesh / node | `Chassi_Bubble_Color` | Bubble chassis geometry | Could be shown/hidden as part of a chassis variant |
| `Chassi_Bubble_Lights` | Mesh / node | `Chassi_Bubble_Color` | Mesh containing the Bubble light geometry/materials | Could potentially be used for a light on/off state |
| `Chassi_Cyber_Color` | Mesh / node | `Scene` | Cyber chassis color component | Potentially used as a configurable chassis/color component; exact interaction logic is not defined in the file |
| `Chassi_Cyber` | Mesh / node | `Chassi_Cyber_Color` | Cyber chassis geometry | Could be shown/hidden as part of a chassis variant |
| `Chassi_Cyber_Lights` | Mesh / node | `Chassi_Cyber_Color` | Mesh containing the Cyber light geometry/materials | Could potentially be used for a light on/off state |
| `Color_library` | Mesh / node | `Scene` | Small mesh containing six material/color variants | Potentially intended as a color/material selection library; this purpose is inferred from the name and material structure |
| `Frame` | Mesh / node | `Scene` | Main structural frame/chassis component | Likely shared by the truck variants |
| `Rim_1` | Mesh / node | `Scene` | First rim geometry | Potentially selectable as a rim variant |
| `Rim_2` | Mesh / node | `Scene` | Second rim geometry | Potentially selectable as a rim variant |
| `Wheels_1` | Mesh / node | `Scene` | First wheel geometry set | Potentially selectable as a wheel variant |
| `Wheels_2` | Mesh / node | `Scene` | Second wheel geometry set | Potentially selectable as a wheel variant |

### Important naming note

`Chassi_Bubble_Lights` and `Chassi_Cyber_Lights` are **mesh objects**, not actual glTF light objects. Their names indicate that they contain geometry/materials associated with the truck lights.

There are also duplicate material names in the GLB. For example, `plastic_black` and `rim_metal_silver` occur more than once. Do not assume that a material name is globally unique when writing application logic.

---

## 3. Scene Hierarchy

The exported hierarchy is:

```text
Scene
├── Chassi_Bubble_Color
│   ├── Chassi_Bubble
│   └── Chassi_Bubble_Lights
├── Chassi_Cyber_Color
│   ├── Chassi_Cyber
│   └── Chassi_Cyber_Lights
├── Color_library
├── Frame
├── Rim_1
├── Rim_2
├── Wheels_1
└── Wheels_2
```

`Chassi_Bubble_Color` and `Chassi_Cyber_Color` are parent nodes for their respective chassis geometry and light meshes.

The remaining components are direct children of `Scene`.

---

## 4. Materials and Textures

The GLB contains **24 material entries** and **30 texture entries**.

### Identified material names

The following material names are present in the exported file:

- `Bubble_Trim`
- `Bubble_Engine_Fan.001`
- `seat_leather`
- `Bubble_Metal_Inside_Light`
- `Bubble_Metal_Inside_Dark`
- `plastic_black`
- `Glass`
- `Lights_Off`
- `Bubble_Chassi_Color_Silver_Glossy`
- `Cyber_Glass_shaded`
- `cyber_chassi_color_silver`
- `cyber_chassi_color_black`
- `Bubble_Chassi_Color_Black_Glossy`
- `Lights_On`
- `frame_cables`
- `frame_steel_matte`
- `rim_metal_silver`
- `Wheels_Rubber_1`
- `wheels_decal_1`
- `Wheels_Rubber_2`
- `wheel_decal_2`

Some names occur more than once in the exported material list.

### Identified embedded image resources

The GLB contains 26 embedded image resources. Their names include:

- `Lamps_trim_normalmap`
- `Lamps_trim`
- `6D_74_94_B0.002`
- `1k_plastic15_normal_opengl`
- `1k_plastic15_diffuse`
- `1k_plastic15_glossiness`
- `Metal057A_1K-JPG_NormalGL`
- `Metal057A_1K-JPG_Color_Silver`
- `0.2k_Steel Glossy_Metallic-Metal057A_1K-JPG_Roughness.jpg`
- `1k_Steel Glossy_Normal`
- `1k_Steel Glossy_BaseColor`
- `0.2k_Steel Glossy_Metallic-0.2k_Steel Glossy_Height.jpg`
- `color_black`
- `0.2k_Steel Glossy_Metallic.jpg-0.2k_Steel Glossy_Height.jpg`
- `Metal057A_1K-JPG_Color_Black`
- `0.2k_Steel Glossy_Metallic-Metal057A_1K-JPG_Roughness`
- `metal_normal_opengl`
- `metal_black_diffuse`
- `metal_metallic-metal_glossiness`
- `metal01a_diffuse_0.5k`
- `metal01_metallic_0.5k`
- `Matte Tire Rubber_Normal`
- `Matte Tire Rubber_Metallic-Matte Tire Rubber_Roughness`
- `wheel_decal`
- `tire_pattern`
- `wheel_decal_2`

All 26 embedded image resources are WebP in the exported GLB.

### Material switching

The file contains separate chassis materials and a `Color_library` mesh with six material/geometry entries. This may support a web-based color configurator, but the GLB does not contain explicit metadata describing how a web application should implement the configuration.

If an object has multiple materials after loading, inspect its material array and use the correct material index rather than relying only on material names.

---

## 5. Animations

No animations are included in the GLB.

```text
Animations: 0
```

There are therefore no exported animation clips for:

- driving
- wheel rotation
- chassis movement
- light switching
- other object animation

Any interactive animation must be implemented in the web application.

For example, wheel rotation could be created programmatically by rotating the relevant wheel objects. The correct rotation axis and direction are not specified by the GLB documentation and should be determined from the model orientation.

---

## 6. Cameras

The GLB contains no exported cameras.

```text
Cameras: 0
```

The web application must therefore create and configure its own camera.

A typical Three.js implementation could use `PerspectiveCamera`. Camera position, field of view, controls, and framing are not defined in the GLB.

---

## 7. Lighting and Environment

The GLB contains no exported glTF light objects.

```text
Exported glTF lights: 0
```

The scene therefore does not provide a ready-made web lighting setup.

The web application should provide its own lighting and environment. Depending on the desired visual result, this could include:

- an HDR environment
- directional or area lighting
- ambient lighting
- environment reflections
- a ground plane or shadow-receiving surface

No HDRI/environment texture was identified as part of the exported glTF scene structure.

The `Chassi_Bubble_Lights` and `Chassi_Cyber_Lights` objects should not be treated as actual Three.js light objects. They are mesh objects containing geometry/materials.

---

## 8. Interactive Objects

The GLB does not contain explicit interaction metadata, event definitions, or configurator instructions.

However, the structure suggests several possible interactive elements.

### Chassis selection

Potential variants:

- `Chassi_Bubble_Color`
- `Chassi_Cyber_Color`

Each contains its own chassis and light mesh.

A web application could potentially switch between these variants by changing their visibility.

### Color selection

`Color_library` contains six primitives/material entries.

Its name and structure suggest that it may be intended to provide color options, but this is not explicitly defined in the GLB.

The exact mapping between the six entries and a user-facing color selector is therefore **not established**.

### Wheel and rim selection

The file contains separate objects:

- `Wheels_1`
- `Wheels_2`
- `Rim_1`
- `Rim_2`

These could potentially be used for wheel/rim configuration.

The GLB does not explicitly define which combinations are intended to be valid.

### Lights

The chassis light meshes use materials including:

- `Lights_Off`
- `Lights_On`

This suggests a possible light-state switch through material replacement or material properties.

The file does not contain a defined interaction or animation for this state change.

---

## 9. Web Developer Notes

### Loading the GLB

The model can be loaded with `GLTFLoader` in Three.js or through `useGLTF` in React Three Fiber.

Example:

```js
const frame = gltf.scene.getObjectByName("Frame");
const bubble = gltf.scene.getObjectByName("Chassi_Bubble_Color");
const cyber = gltf.scene.getObjectByName("Chassi_Cyber_Color");
const colorLibrary = gltf.scene.getObjectByName("Color_library");
```

Use the exact exported names when accessing objects programmatically.

### Variant visibility

For chassis variants, a possible implementation is to toggle visibility:

```js
bubble.visible = true;
cyber.visible = false;
```

This is an implementation example, not functionality contained in the GLB itself.

### Material switching

When changing materials, check whether `object.material` is a single material or an array.

For example:

```js
if (Array.isArray(object.material)) {
  // Select the required material index.
}
```

Do not assume that duplicate material names represent the same material instance.

### WebP textures

The embedded image resources are WebP and the GLB uses the `EXT_texture_webp` extension.

The target rendering stack should therefore be tested for compatibility with the exported texture setup.

### glTF extensions

The GLB uses:

```text
EXT_texture_webp
KHR_texture_transform
KHR_materials_transmission
KHR_materials_emissive_strength
KHR_materials_specular
KHR_materials_ior
```

Verify support for these extensions in the selected Three.js version and rendering configuration.

### Performance considerations

The GLB is approximately 6.93 MB and contains around 12 mesh nodes with approximately 24 materials and 26 embedded WebP image resources.

The model should therefore be tested on the target devices and browsers.

No optimization has been applied as part of this documentation.

### Interaction metadata

There is no explicit interaction metadata in the exported GLB.

The web developer will need to define:

- which variants can be selected
- which colors are available
- which wheel/rim combinations are valid
- whether the lights can be switched
- camera controls
- animations
- UI behavior

These decisions are not encoded in the model file.

---

## 10. File Information

| Property | Value |
|---|---|
| File | `WIP_2.glb` |
| Format | GLB / glTF 2.0 |
| Exported from | Blender |
| glTF exporter | `Khronos glTF Blender I/O v5.2.39` |
| Scene | `Scene` |
| Nodes | 12 |
| Meshes | 12 |
| Materials | 24 |
| Texture entries | 30 |
| Embedded images | 26 |
| Embedded image format | WebP |
| Animations | 0 |
| Cameras | 0 |
| Exported lights | 0 |
| Approximate file size | 6.93 MB |

### Mesh statistics

| Mesh | Primitives | Positions | Triangles |
|---|---:|---:|---:|
| `Chassi_Bubble` | 7 | 10,329 | 9,776 |
| `Bubble_Lights` | 1 | 318 | 418 |
| `Chassi_Bubble_Color` | 1 | 8,485 | 7,363 |
| `Chassi_Cyber` | 4 | 14,628 | 11,710 |
| `Cyber_Lights` | 1 | 216 | 304 |
| `Chassi_Cyber_Color` | 1 | 16,226 | 12,724 |
| `Color_library` | 6 | 36 | 20 |
| `Frame` | 4 | 24,618 | 19,497 |
| `Rim_1` | 1 | 3,524 | 5,120 |
| `Rim_2` | 1 | 22,456 | 28,576 |
| `Wheels_1` | 2 | 14,932 | 25,360 |
| `Wheels_2` | 2 | 5,068 | 8,576 |

---

## Summary for the Web Developer

This GLB contains a monster truck with two chassis variants, shared structural components, two wheel variants, two rim variants, materials, and embedded WebP textures.

The main exported objects are:

- `Chassi_Bubble_Color`
- `Chassi_Cyber_Color`
- `Color_library`
- `Frame`
- `Rim_1`
- `Rim_2`
- `Wheels_1`
- `Wheels_2`

The file contains **no cameras, no exported glTF lights, and no animations**, so these must be created or handled by the web application.

The scene structure may support a configurator with chassis, color, wheel, rim, and light-state options, but the exact interaction logic is **not defined in the GLB** and must be implemented separately.

Use the exact object names from this document when connecting the model to Three.js or React Three Fiber.
