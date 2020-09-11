import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import EditTapForm from './EditTapForm';

class TapControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null,
      editing: false
    };
  }  

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }
    
  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({masterTapList: newMasterTapList, formVisibleOnPage: false });
  }

  handleDeletingTap = (id) => {
    const newMasterTapList = this.state.masterTapList.filter(tap => tap.id !== id);
    this.setState({
      masterTapList: newMasterTapList,
      selectedTap: null
    });
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
    const editedMasterTapList = this.state.masterTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
      masterTapList: editedMasterTapList,
        editing: false,
        selectedTap: null
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
    onClickingEdit = {this.handleEditClick} />
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

export default TapControl;