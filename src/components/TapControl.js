import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import EditTapForm from './EditTapForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class TapControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedTap: null,
      editing: false
    };
  }  

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    this.setState({selectedTap: selectedTap});
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent } = newTap;
    const action = {
      type: 'ADD_TAP',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TAP',
      id: id
    }
    dispatch(action);
    this.setState({selectedTap: null});
  }
  
  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false 
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent } = tapToEdit;
    const action = {
      type: 'ADD_TAP',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleSellingPint = (tapToEdit) => {
    if(tapToEdit.quantity > 0) {
    tapToEdit.quantity --
    }
    const editedMasterTapList = this.state.masterTapList
    
    .filter(tap => tap.id !== this.state.selectedTap.id)
    .concat(tapToEdit);
    this.setState({
      masterTapList: editedMasterTapList,
      selectedProduct: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing){
      currentlyVisibleState = <EditTapForm tap = {this.state.selectedTap} onEditTap = {this.handleEditingTapInList} />
      buttonText = "Return to Tap List";
  } else if (this.state.selectedTap != null) {
    currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} onClickingDelete = {this.handleDeletingTap}
    onClickingEdit = {this.handleEditClick} onClickingSold = {this.handleSellingPint} />
    buttonText = "Return to Tap List";
  } else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <NewTapForm  onNewTapCreation={this.handleAddingNewTapToList} />;
    buttonText = "Return to Tap List";
  } else {
    currentlyVisibleState = <TapList tapList={this.state.masterTapList} onTapSelection={this.handleChangingSelectedTap} />
    buttonText = "Add Tap";
  }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TapControl.propTypes = {
  masterTapList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTapList: state
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;