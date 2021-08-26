import React from 'react';
import { Col, Row, Modal, Input } from 'antd/es';
import MentionsTagsComponent from '../MentionsTagsComponent';

const UploadAPictureModal = ({state, setState, uploadState, setUploadState}) => {
  const uploadPicture = () => {
    alert("J'upload une image avec la description : " + state.description + " et les hashtags " + state.hashtags + " et les mentions " + state.mentions);
  }
   
  const updateMentions = (value) => {
    setState({ ...state, mentions: value });
  }
   
  const updateHashtags = (value) => {
    setState({ ...state, hashtags: value })
  }
   
  return (
    <Modal title="Upload a picture" okText="Upload" visible={uploadState} onOk={uploadPicture} onCancel={() => setUploadState(false)}>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Description:</b>
          <Input id="description" title="Description" type="text" value={state.description} onChange={(e) => setState({ ...state, description: e.target.value })} />
        </Col>
      </Row>
      <MentionsTagsComponent type="mentions" value={state.mentions} title="Mention a user" setValue={updateMentions} />
      <MentionsTagsComponent type="tags" value={state.hashtags} title="Hashtags" setValue={updateHashtags} />
    </Modal>
  );
};

export default UploadAPictureModal;
