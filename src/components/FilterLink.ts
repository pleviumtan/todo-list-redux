import { connect } from 'react-redux';
import { setVisibilityFilter } from 'Utils/actions';
import { Link } from 'Src/components/view/Link';
import ITodoObject from 'Utils/defs/ITodoObject';

const mapStateToProps = (
  state: { todos: ITodoObject[]; visibilityFilter: string },
  ownProps: { filter: string }
): { active: boolean } => {
  //We add property "active" to Link components here
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};
//然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起
const mapDispatchToProps = (
  dispatch: (action: { type: string; filter: string }) => void,
  ownProps: { filter: string }
): { onClick: () => void } => {
  return {
    onClick: (): void => {
      console.log('dispatch an action:' + ownProps.filter);
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
