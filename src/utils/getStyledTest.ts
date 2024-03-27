export const getStyledTest = (Component: any) => {
    const componentClass = Component({}).type.styledComponentId
    const ComponentRoots = document.getElementsByClassName(componentClass)
    const style = window.getComputedStyle(ComponentRoots[0]);
    return style;
}