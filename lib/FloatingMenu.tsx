import * as React from 'react';
import {
  Animated,
  Easing,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';

import styles from './styles';

export const MENU_OPEN_DURATION = 150;

export interface FloatingMenuState {
  optionsContainerAnim: Animated.Value;
  isMenuOpen: boolean;
}

export interface FloatingMenuProps {
  /**
   * List of items to display in the popup menu.
   */
  items: Array<FloatingMenuItem>;

  /**
   * Whether to highlight the currently selected menu item. Defaults to true.
   */
  showSelectedIndicator?: boolean;

  /**
   * Whether to automatically close the popup menu when an item is selected. Defaults to true.
   */
  closeOnSelect?: boolean;

  /**
   * Currently selected @see FloatingMenuItem .
   */
  selectedItem: FloatingMenuItem;

  /**
   * Callback invoked when an item is selected in the popup menu.
   */
  onSelectItem: (item: FloatingMenuItem) => void;
}

export interface FloatingMenuItem {
  name: string;
  value: string|number;
}

export default class FloatingMenu extends React.Component<FloatingMenuProps, FloatingMenuState> {
  static defaultProps: Partial<FloatingMenuProps> = {
    showSelectedIndicator: true,
    closeOnSelect: true,
    items: [],
  }

  state = { optionsContainerAnim: new Animated.Value(0), isMenuOpen: false }

  /**
   * Indicates whether the collapsible menu is currently visible.
   */
  public get isOpen(): boolean {
    return this.state.isMenuOpen;
  }

  /**
   * Toggle the visibility of the collapsible menu.
   */
  public toggleMenu = () => {
    const { optionsContainerAnim, isMenuOpen } = this.state;

    Animated.timing(
      optionsContainerAnim,
      {
        toValue: isMenuOpen ? 0 : 210,
        easing: Easing.cubic,
        duration: MENU_OPEN_DURATION,
      },
    ).start(() => this.setState({ isMenuOpen: !isMenuOpen }));
  }

  private onSelectOption = (option: FloatingMenuItem) => {
    const { onSelectItem, closeOnSelect } = this.props;

    if (closeOnSelect)
      this.toggleMenu();

    onSelectItem(option);
  }

  render() {
    const { items, selectedItem, showSelectedIndicator } = this.props;
    const { optionsContainerAnim, isMenuOpen } = this.state;

    return (
      <View style={styles.wrapper}>
        <Animated.View
          style={[
            styles.optionsContainer,
            styles.flexOne,
            styles.dropShadow,
            { height: optionsContainerAnim, marginBottom: isMenuOpen ? -4 : 0 },
          ]}
        >
          <ScrollView style={styles.flexOne} contentContainerStyle={[styles.scrollContainer, styles.flexOne]}>
            {
              items.map(t => (
                <TouchableOpacity style={styles.option} key={t.value} onPress={() => this.onSelectOption(t)}>
                  {
                    showSelectedIndicator && selectedItem.value === t.value ? <View style={styles.selectedTabIndicator} /> : <View />
                  }
                  <Text style={[styles.optionText, { fontWeight: selectedItem.value === t.value ? 'bold' : 'normal'}]}>{t.name}</Text>
                  <View />
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </Animated.View>

        {
          isMenuOpen ? <View style={styles.anchor} /> : null
        }

        <TouchableOpacity style={[styles.trigger, styles.dropShadow]} onPress={this.toggleMenu}>
          <Text>Tabs</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
