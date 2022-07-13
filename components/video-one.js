import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { VideoOneData } from "@/data";

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);
  const { sectionContent, video } = VideoOneData;
  return (
    <>
      <section className="commonSection our_work">
        <div className="videoWrap_2">
          <img src={video.image} alt={video.title} />
        </div>
        <Container>
          <Row>
            <Col lg={6} sm={12}></Col>
            <Col lg={6} sm={12}>
              <div className="ab_detail_wrap">
                <SectionTitle data={sectionContent} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VideoOne;
