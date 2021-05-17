declare namespace Orientation {
    type Orientation = "LANDSCAPE" | "PORTRAIT" | "UNKNOWN" | "PORTRAITUPSIDEDOWN";
    type SpecificOrientation = "LANDSCAPE-LEFT" | "LANDSCAPE-RIGHT" | "PORTRAIT" | "UNKNOWN" | "PORTRAITUPSIDEDOWN";

    export function addOrientationListener(callback: (orientation: Orientation) => void): void;
    export function removeOrientationListener(callback: (orientation: Orientation) => void): void;
    export function addSpecificOrientationListener(callback: (specificOrientation: SpecificOrientation) => void): void;
    export function removeSpecificOrientationListener(callback: (specificOrientation: SpecificOrientation) => void): void;

    export function getInitialOrientation(): Orientation;
    export function lockToPortrait(): void;
    export function lockToLandscape(): void;
    export function lockToLandscapeLeft(): void;
    export function lockToLandscapeRight(): void;
    export function unlockAllOrientations(): void;
    export function getOrientation(callback: (err: Error, orientation: Orientation) => void): void;
    export function getSpecificOrientation(callback: (err: Error, orientation: SpecificOrientation) => void): void;
}

export = Orientation;
