import React from 'react';
import { Button, Col, Row, Modal, List, Tag } from 'antd/es';

const PublicationModal = ({publication, previewState, setPreviewState}) => {
  const updatePic = () => {
    alert("J'update la publication avec l'id : " + publication.id);
  }
   
  const deletePic = () => {
    alert("Je supprime la publication avec l'id : " + publication.id);
  }
   
  return (
    <Modal width={520} visible={previewState.previewPublicationModal} onCancel={() => setPreviewState({ ...previewState, previewPublicationModal: false })}
      footer={<Row type="flex">
        <Col span={12} className="text-center">
          <Button type="ghost" icon="edit" onClick={updatePic}>Edit</Button>
        </Col>
        <Col span={12} className="text-center">
          <Button type="danger" icon="delete" onClick={deletePic}>Delete</Button>
        </Col>
      </Row>}
    >
      <Row type="flex" align="middle">
        <Col xs={24} md={12} className="text-center">
          <img src={publication.imageUrl} width={200} height={200} alt={publication.description} />
        </Col>
        <Col xs={24} md={12}>
          <div>
            <b>Description: </b>
            <p>{publication.description}</p>
          </div>
          <div>
            <b>Hashtag:</b>
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={publication.hashtags}
              renderItem={(tag) => (
                <List.Item>
                  <Tag>{`${tag}`}</Tag>
                </List.Item>
              )}
            />
          </div>
          <div>
            <b>Mention:</b>
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={publication.mentions}
              renderItem={(user) => (
                <List.Item>
                  <Tag>{`@${user}`}</Tag>
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default PublicationModal;
