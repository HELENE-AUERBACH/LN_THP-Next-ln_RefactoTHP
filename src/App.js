import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';
import data from './config/data.json';
import PublicationModal from './components/PublicationModal';
import UploadAPictureModal from './components/UploadAPictureModal';
import EditProfileModal from './components/EditProfileModal';
import PublicationsComponent from './components/PublicationsComponent';

function App() {
  const [state, setState] = useState(data);
   
  const [previewState, setPreviewState] = useState({
    previewPublicationModal: false,
    previewItem: 0,
  });
   
  const [uploadState, setUploadState] = useState(false);
   
  const [editProfileState, setEditProfileState] = useState(false);
   
  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  }
   
  return (
    <div style={{ margin: 50 }}>
      <PublicationModal publication={state.profileData.posts[previewState.previewItem]} previewState={previewState} setPreviewState={setPreviewState} />
      <UploadAPictureModal state={state} setState={setState} uploadState={uploadState} setUploadState={setUploadState} />
      <EditProfileModal state={state} setState={setState} editProfileState={editProfileState} setEditProfileState={setEditProfileState} />
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar size={100} icon="user" className="profil-pic" src={state.profileData.profilePicture} />
                    <h3>{`${state.profileData.firstname} ${state.profileData.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {state.profileData.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {state.profileData.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {state.profileData.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(state.profileData.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button type="ghost" icon="setting" onClick={() => setEditProfileState(true)}>Edit account</Button>
                <br />
                <br />
                <Button type="ghost" icon="upload" onClick={() => setUploadState(true)}>Upload a picture</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <PublicationsComponent posts={state.profileData.posts} setPreviewState={setPreviewState} />
    </div>
  );
}

export default App;
