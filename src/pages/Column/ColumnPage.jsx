import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../api/supabase.js";
import Seo from "../../components/seo/Seo.jsx";

const fallbackCategoryStyle = {
  backgroundColor: "#eef2f7",
  color: "#344054",
};

const sectionStyles = {
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "18px",
    color: "var(--accent-color)",
    fontSize: "0.92rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  introCard: {
    padding: "32px",
    borderRadius: "28px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(247,249,252,0.98) 100%)",
    border: "1px solid rgba(15, 23, 42, 0.06)",
    boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
    marginBottom: "28px",
  },
  card: {
    transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    background: "#ffffff",
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.05)",
    overflow: "hidden",
  },
};

function extractPreviewText(html) {
  return (html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

const ColumnList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("column_posts")
        .select(
          "id, title, content, created_at, published_at, column_categories(name, badge_bg_color, badge_text_color, sort_order)"
        )
        .eq("is_public", true)
        .order("published_at", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setPosts(data || []);
      setLoading(false);
    };

    fetch();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("ko-KR");
  };

  if (loading) {
    return (
      <section className="services section">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center py-5">
                <h4>칼럼을 불러오는 중입니다.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services section">
      <Seo
        title="한결칼럼 | 인천 변호사 법률칼럼"
        description="공동법률사무소 한결의 한결칼럼입니다. 인천 변호사, 학교폭력, 의료소송, 민사, 형사 등 실제 사건 대응에 도움이 되는 법률 정보를 제공합니다."
        keywords="한결칼럼, 인천 변호사 칼럼, 인천 학교폭력 변호사, 인천 의료소송 변호사, 공동법률사무소 한결"
        path="/Column"
      />
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex flex-column gap-3">
              {posts.length ? (
                posts.map((post) => {
                  const category = post.column_categories || null;
                  const categoryName = category?.name || "미분류";
                  const previewText = extractPreviewText(post.content).slice(0, 72);
                  const style = {
                    backgroundColor:
                      category?.badge_bg_color || fallbackCategoryStyle.backgroundColor,
                    color: category?.badge_text_color || fallbackCategoryStyle.color,
                  };

                  return (
                    <Link
                      key={post.id}
                      to={`/Column/${post.id}`}
                      className="text-decoration-none"
                      aria-label={`${post.title} 상세 보기`}
                    >
                      <article
                        className="rounded-4 px-3 px-md-4 py-3"
                        style={sectionStyles.card}
                        onMouseEnter={(event) => {
                          event.currentTarget.style.transform = "translateY(-2px)";
                          event.currentTarget.style.boxShadow = "0 14px 28px rgba(15, 23, 42, 0.09)";
                          event.currentTarget.style.borderColor = "rgba(201, 168, 118, 0.35)";
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.transform = "translateY(0)";
                          event.currentTarget.style.boxShadow = sectionStyles.card.boxShadow;
                          event.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.08)";
                        }}
                      >
                        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                              <span
                                className="fw-semibold px-2 py-1"
                                style={{
                                  borderRadius: "999px",
                                  fontSize: "0.72rem",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  letterSpacing: "0.02em",
                                  ...style,
                                }}
                              >
                                {categoryName}
                              </span>
                              <span className="text-muted small">{formatDate(post.published_at || post.created_at)}</span>
                            </div>

                            <h3
                              className="text-dark fw-bold mb-2"
                              style={{
                                fontSize: "clamp(1rem, 1.7vw, 1.2rem)",
                                lineHeight: 1.4,
                              }}
                            >
                              {post.title}
                            </h3>

                            <p
                              className="mb-0"
                              style={{
                                color: "rgba(33, 37, 41, 0.72)",
                                fontSize: "0.9rem",
                                lineHeight: 1.6,
                              }}
                            >
                              {previewText || "칼럼 본문을 준비 중입니다."}
                            </p>
                          </div>

                          <div className="d-flex align-items-end justify-content-lg-end flex-shrink-0">
                            <div
                              className="fw-semibold small"
                              style={{
                                color: "var(--accent-color)",
                                letterSpacing: "0.02em",
                                whiteSpace: "nowrap",
                              }}
                            >
                              자세히 보기 <i className="bi bi-arrow-right ms-1"></i>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })
              ) : (
                <div className="text-center py-5">
                  <h4>등록된 칼럼이 아직 없습니다.</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnList;
