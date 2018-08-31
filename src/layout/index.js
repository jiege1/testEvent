import React from 'react';
import PropTypes from 'prop-types';
import AlloyEvent from './alloyEvent';
import css from './index.less';

export default class Layout extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.layoutRef = React.createRef();
  }

  componentDidMount() {
    this.alloyEvent = new AlloyEvent(
      this.layoutRef.current, {
        onTap: () => {
          console.log('onTap');
        },
        onSingleTap: () => {
          console.log('onSingleTap');
        },
        onDoubleTap: () => {
          console.log('onDoubleTap');
        },
        onLongPress: () => {
          console.log('onLongPress');
        },
        onSwipe: (e) => {
          console.log(e);
        },
      }, {
        swipePercent: 0.02,
      }
    );
  }

  render() {
    return (
      <div className={css.layout} ref={this.layoutRef}>
        react-h5-temp
      </div>
    );
  }
}