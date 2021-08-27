import React from 'react';
import { Col, Row, Icon, Card } from 'antd/es';

const PublicationsComponent = ({posts, setPreviewState}) => {
  const openPreview = (postNumber) => {
    setPreviewState({
      previewItem: postNumber,
      previewPublicationModal: true,
    });
  }
   
  return (
    <Row type="flex" justify="center">
      <Col sm={18} xs={24}>
        <Col span={24} className="container text-center">
          <h2>
            <Icon type="save" />
            <span className="span-icon">Publications</span>
          </h2>
	  {
            posts.map((post, index) => (
              <Card bordered className="card-pubs" key={post.id} onClick={() => openPreview(index)}>
                <img src={post.imageUrl} width={200} height={200} alt={post.imageUrl} />
              </Card>
            ))
          }
        </Col>
      </Col>
    </Row>
  );
};

export default PublicationsComponent;
