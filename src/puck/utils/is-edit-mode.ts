/**
 * Checks if a puck component is being rendered in editMode.
 * Puck passes a undocumented editMode to all puck components render function.
 * 
 * Why its needed?
 * - when in edit mode we cannot use react server components because its rendered on client side
 * - so we check this props and render different component for edit mode and render mode
 * - typically we fetch data from api route in edit mode using axios and swr
 * - but when not in edit mode we fetch data inside server component
 * 
 * @param props 
 * @returns 
 */
export function isEditMode(props: any) {
    if (props?.editMode === true) {
        return true;
    }
    return false;
}