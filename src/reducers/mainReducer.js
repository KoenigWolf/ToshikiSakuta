export const initialState = {
  isHovered: false,
  isMenuOpen: false,
  activeSection: "home",
};

export function mainReducer(state, action) {
  switch (action.type) {
    case "SET_HOVER":
      return { ...state, isHovered: action.payload };
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case "SET_ACTIVE_SECTION":
      return { ...state, activeSection: action.payload };
    default:
      return state;
  }
}
