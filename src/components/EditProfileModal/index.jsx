import React from 'react';
import { Col, Row, Modal, Input, message } from 'antd/es';

const EditProfileModal = ({state, setState, editProfileState, setEditProfileState}) => {
  const updateProfile = () => {
    let tmp = state.profileData;
    tmp.email = state.email;
    tmp.firstname = state.firstname;
    tmp.lastname = state.lastname;
    tmp.phoneNumber = state.phoneNumber;
    setState({ ...state, profileData: tmp });
    setEditProfileState(false);
    message.success('Profile well updated', 3);
  }
   
  return (
    <Modal title="Edit your account" okText="Update" visible={editProfileState} onOk={updateProfile} onCancel={() => setEditProfileState(false)}>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>EMail</b>
          <Input id="email" type="text" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Firstname</b>
          <Input id="firstname" type="text" value={state.firstname} onChange={(e) => setState({ ...state, firstname: e.target.value })} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Lastname</b>
          <Input id="lastname" type="text" value={state.lastname} onChange={(e) => setState({ ...state, lastname: e.target.value })} />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Phone number</b>
          <Input id="email" type="text" value={state.phoneNumber} onChange={(e) => setState({ ...state, phoneNumber: e.target.value })} />
        </Col>
      </Row>
    </Modal>
  );
};

export default EditProfileModal;
