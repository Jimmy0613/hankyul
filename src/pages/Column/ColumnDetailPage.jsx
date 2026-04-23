import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../api/supabase.js";

const fallbackCategoryStyle = {
  backgroundColor: "#eef2f7",
  color: "#344054",
};

const detailCardStyle = {
  borderRadius: "28px",
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.99) 0%, rgba(247,249,252,0.98) 100%)",
  border: "1px solid rgba(15, 23, 42, 0.08)",
  boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
  padding: "clamp(24px, 4vw, 44px)",
};

const contentStyle = {
  color: "rgba(33, 37, 41, 0.92)",
  lineHeight: 1.7,
  fontSize: "15px",
  fontFamily: "var(--default-font)",
};

const contentHeadingStyle = `
  .column-detail-content {
    outline: none;
    min-height: 350px;
    font-size: 15px;
    line-height: 1.7;
    font-family: var(--default-font);
  }

  .column-detail-content h1,
  .column-detail-content h2,
  .column-detail-content h3 {
    color: var(--heading-color);
    font-family: var(--default-font);
    letter-spacing: normal;
    line-height: 1.7;
  }

  .column-detail-content h1 {
    font-size: 26px;
    font-weight: 700;
    margin: 10px 0;
  }

  .column-detail-content h2 {
    font-size: 22px;
    font-weight: 700;
    margin: 10px 0;
  }

  .column-detail-content h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
  }

  .column-detail-content p {
    margin: 10px 0;
    white-space: pre-wrap;
  }

  .column-detail-content blockquote {
    position: relative;
    margin: 24px auto;
    padding: 24px 32px 34px;
    background: #f8fafc;
    color: #333;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.8;
    border: none;
    border-radius: 12px;
  }

  .column-detail-content blockquote::before {
    content: "❝";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 42px;
    color: #cbd5e1;
    font-weight: bold;
  }

  .column-detail-content blockquote::after {
    content: "❞";
    position: absolute;
    bottom: -26px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 42px;
    color: #cbd5e1;
    font-weight: bold;
  }

  .column-detail-content blockquote p:last-child {
    margin-bottom: 0;
  }
`;

const ColumnDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("column_posts")
        .select(
          "id, title, content, created_at, updated_at, column_categories(name, badge_bg_color, badge_text_color)"
        )
        .eq("id", id)
        .eq("is_public", true)
        .single();

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setPost(data);
      setLoading(false);
    };

    fetch();
  }, [id]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("ko-KR");
  };

  if (loading) {
    return (
      <section className="services section">
        <div className="container" data-aos="fade-up">
          <div className="text-center py-5">
            <h4>칼럼을 불러오는 중입니다.</h4>
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="services section">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div style={detailCardStyle}>
                <h3 className="mb-3">칼럼을 찾을 수 없습니다.</h3>
                <p className="mb-4 text-muted">
                  삭제되었거나 아직 공개되지 않은 칼럼일 수 있습니다.
                </p>
                <Link to="/Column" className="btn btn-outline-dark rounded-pill px-4">
                  칼럼 목록으로
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const category = post.column_categories || null;
  const categoryName = category?.name || "미분류";
  const categoryStyle = {
    backgroundColor: category?.badge_bg_color || fallbackCategoryStyle.backgroundColor,
    color: category?.badge_text_color || fallbackCategoryStyle.color,
  };

  return (
    <section className="services section">
      <style>{contentHeadingStyle}</style>
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div style={detailCardStyle}>
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
                <Link
                  to="/Column"
                  className="text-decoration-none fw-semibold"
                  style={{ color: "var(--accent-color)" }}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  칼럼 목록
                </Link>
              </div>

              <div className="d-flex align-items-center gap-3 flex-wrap mb-2">
                <span
                  className="fw-semibold px-3 py-2"
                  style={{
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    display: "inline-flex",
                    alignItems: "center",
                    ...categoryStyle,
                  }}
                >
                  {categoryName}
                </span>
                <h1
                  className="text-dark fw-bold mb-0"
                  style={{
                    fontSize: "clamp(1.72rem, 3vw, 2.25rem)",
                    lineHeight: 1.3,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {post.title}
                </h1>
              </div>

              <div className="mb-4">
                <span className="text-muted small">작성일 {formatDate(post.created_at)}</span>
              </div>

              <div
                className="column-detail-content"
                style={contentStyle}
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnDetailPage;
