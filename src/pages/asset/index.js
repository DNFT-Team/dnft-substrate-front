import { DownOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Input } from "element-react";
import { css, cx } from "emotion";
import React, { useCallback, useMemo, useState } from "react";
import { nfIconSvg } from "utils/svg";

const AssetScreen = (props) => {
  const tabArray = ["In wallet", "On Sale", "My favorite", "Sold"];
  const data = [
    {
      src: "url('http://img02.yohoboys.com/contentimg/2019/03/02/12/0212d8e8832ffd18801979243989648178.jpg')",
      title: "Shanghaibar",
      account: 123,
      sold: true,
    },
    {
      src: "url('https://s.yimg.com/os/creatr-uploaded-images/2021-01/449bc850-619a-11eb-bfbd-0eb0cfb5ab9a')",
      title: "Shanghaibar",
      account: "1,234",
      stared: true,
    },
    {
      src: "url('https://cdnb.artstation.com/p/assets/images/images/014/135/359/medium/xiong-tang-05.jpg?1542638071')",
      title: "Shanghaibar",
      account: 12,
      sold: true,
    },
    {
      src: "url('http://crawl.ws.126.net/901d09e9cb27673f0b0d852cc6fe411f.jpg')",
      title: "Shanghaibar",
      account: 736,
    },
    {
      src: "url('http://img02.yohoboys.com/contentimg/2019/03/02/12/0212d8e8832ffd18801979243989648178.jpg')",
      title: "Shanghaibar",
      account: 123,
      sold: true,
    },
    {
      src: "url('https://s.yimg.com/os/creatr-uploaded-images/2021-01/449bc850-619a-11eb-bfbd-0eb0cfb5ab9a')",
      title: "Shanghaibar",
      account: "1,234",
      stared: true,
    },
    {
      src: "url('https://cdnb.artstation.com/p/assets/images/images/014/135/359/medium/xiong-tang-05.jpg?1542638071')",
      title: "Shanghaibar",
      account: 12,
      sold: true,
    },
    {
      src: "url('http://crawl.ws.126.net/901d09e9cb27673f0b0d852cc6fe411f.jpg')",
      title: "Shanghaibar",
      account: 736,
    },
    {
      src: "url('http://img02.yohoboys.com/contentimg/2019/03/02/12/0212d8e8832ffd18801979243989648178.jpg')",
      title: "Shanghaibar",
      account: 123,
      sold: true,
    },
    {
      src: "url('https://s.yimg.com/os/creatr-uploaded-images/2021-01/449bc850-619a-11eb-bfbd-0eb0cfb5ab9a')",
      title: "Shanghaibar",
      account: "1,234",
      stared: true,
    },
    {
      src: "url('https://cdnb.artstation.com/p/assets/images/images/014/135/359/medium/xiong-tang-05.jpg?1542638071')",
      title: "Shanghaibar",
      account: 12,
      sold: true,
    },
    {
      src: "url('http://crawl.ws.126.net/901d09e9cb27673f0b0d852cc6fe411f.jpg')",
      title: "Shanghaibar",
      account: 736,
    },
    {
      src: "url('http://img02.yohoboys.com/contentimg/2019/03/02/12/0212d8e8832ffd18801979243989648178.jpg')",
      title: "Shanghaibar",
      account: 123,
      sold: true,
    },
    {
      src: "url('https://s.yimg.com/os/creatr-uploaded-images/2021-01/449bc850-619a-11eb-bfbd-0eb0cfb5ab9a')",
      title: "Shanghaibar",
      account: "1,234",
      stared: true,
    },
    {
      src: "url('https://cdnb.artstation.com/p/assets/images/images/014/135/359/medium/xiong-tang-05.jpg?1542638071')",
      title: "Shanghaibar",
      account: 12,
      sold: true,
    },
    {
      src: "url('http://crawl.ws.126.net/901d09e9cb27673f0b0d852cc6fe411f.jpg')",
      title: "Shanghaibar",
      account: 736,
    },
  ];

  const [selectedTab, setSelectedTab] = useState("In wallet");
  const renderAssetHeader = useMemo(() => {
    return (
      <div className={styleHeader}>
        <h1 className={styleTitle}>Asset</h1>
        <div className={styleAssetAccountContainer}>
          <div className={styleIcon}>{nfIconSvg}</div>
          <span className={styleCoinName}>$DNF</span>
          <span>123.12</span>
        </div>
      </div>
    );
  }, []);

  const renderTabList = useMemo(() => {
    return tabArray.map((item) => {
      return (
        <div
          className={cx(
            styleTabButton,
            item === selectedTab && styleActiveTabButton
          )}
          onClick={() => {
            setSelectedTab(item);
          }}
        >
          {item}
        </div>
      );
    });
  }, [selectedTab]);

  const renderFilter = useMemo(() => {
    return (
      <div className={styleFilterContainer}>
        <div className={styleFilter}>
          <span>Collection</span>
          <DownOutlined />
        </div>
        <div className={styleSearch}>
          <i className="el-icon-search"></i>
          <Input placeholder={"Search"} />
        </div>
      </div>
    );
  }, []);

  const renderAction = useCallback(
    (item) => {
      switch (selectedTab) {
        case "In wallet":
          return (
            <div className={styleButtonContainer}>
              <div className={cx(styleButton, styleFillButton)}>
                Cross-chain
              </div>
              <div className={cx(styleButton, styleBorderButton)}>Sell</div>
            </div>
          );
        case "On Sale":
          return (
            <div className={styleButtonContainer}>
              <span className={stylePrice}>1.8ETH</span>
              <div className={cx(styleButton, styleFillButton)}>Edit</div>
            </div>
          );
        case "My favorite":
          return item.sold ? (
            <div className={cx(styleText, styleSoldOut)}>Sold out</div>
          ) : (
            <div className={styleButtonContainer}>
              <span className={stylePrice}>1.8ETH</span>
              <div className={cx(styleButton, styleFillButton)}>Buy</div>
            </div>
          );
        case "Sold":
          return (
            <div className={styleButtonContainer}>
              <span>
                <span className={styleText}>Sold for </span>
                <span className={stylePrice}>1.8ETH</span>
              </span>
              <div className={styleText}>14/06/2021</div>
            </div>
          );

        default:
          return null;
      }
    },
    [selectedTab]
  );

  const renderCard = useCallback(
    (item) => {
      return (
        <div className={styleCardContainer}>
          <div
            style={{
              background: `center / cover no-repeat ${item.src}`,
            }}
            className={styleShortPicture}
          />
          <div className={styleInfoContainer}>
            <div className={styleCardHeader}>
              <span className={styleCardTitle}>Shanghaibar</span>
              <div className={styleStarInfo}>
                <div className={styleStarIconContainer}>
                  <HeartFilled
                    style={{ color: item.stared ? "#F13030" : "#c4c4c4" }}
                  />
                </div>
                <span>{item.account}</span>
              </div>
            </div>
            <div className={styleActionContainer}>{renderAction(item)}</div>
          </div>
        </div>
      );
    },
    [renderAction]
  );

  return (
    <div className={styleContainer}>
      <div>
        {renderAssetHeader}
        <div className={styleBody}>
          <div className={styleTabContainer}>{renderTabList}</div>
          {renderFilter}

          <div className={styleCardList}>
            {data.map((item) => {
              return renderCard(item);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssetScreen;

const styleContainer = css`
  background: #f5f7fa;
  padding: 10px 16px;
  height: 100%;
  & > div {
    background: white;
    border-radius: 10px;
    padding: 48px 0;
  }
`;

const styleHeader = css`
  border-bottom: 1px solid #efefef;
  padding: 0 36px;
`;

const styleTitle = css`
  font-size: 30px;
  color: #233a7d;
  margin: 0;
`;

const styleAssetAccountContainer = css`
  padding: 40px 0 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 30px;
  }
`;

const styleBody = css`
  padding: 24px 36px;
`;

const styleTabContainer = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const styleIcon = css`
  background: #c0beff;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleCoinName = css`
  padding: 0 12px 0 20px;
`;

const styleTabButton = css`
  height: 32px;
  color: #8588a7;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const styleActiveTabButton = css`
  background: #1b2559;
  color: white;
`;

const styleFilterContainer = css`
  border: 1px solid #e1e2ed;
  border-radius: 10px;
  width: 100%;
  height: 46px;
  display: flex;
  margin: 24px 0 64px 0;
`;

const styleFilter = css`
  display: flex;
  align-items: center;
  padding: 0 20px 0 14px;
  justify-content: space-between;
  width: 160px;
  border-right: 1px solid #e1e2ed;
  span {
    font-weight: bold;
    font-size: 18px;
    color: #263b79;
  }
  svg {
    font-size: 12px;
    padding-left: 28px;
  }
`;

const styleSearch = css`
  padding-left: 24px;
  display: flex;
  align-items: center;
  color: #263b79;
  flex: 1;
  .el-input__inner {
    border: none;
    font-size: 14px;
    margin-left: 12px;
    width: 100%;
    color: #8f9bba;
  }
`;

const styleCardList = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const styleCardContainer = css`
  height: 500px;
  background: #f5f7fa;
  border-radius: 18px;
  min-width: 330px;
  flex: 1;
  display: flex;
  flex-direction: column;
  &:hover {
    background: white;
    box-shadow: 0px 16.1719px 22.3919px rgba(0, 0, 0, 0.05);
    position: relative;
    top: -20px;
  }
  &:last-child {
    margin-right: auto;
  }
`;

const styleShortPicture = css`
  height: 375px;
  border-radius: 18px 18px 0 0;
`;

const styleStarInfo = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8f9bba;
  position: absolute;
  top: -36px;
  right: 0;
`;

const styleStarIconContainer = css`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 20px;
  }
`;

const styleInfoContainer = css`
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const styleCardHeader = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #f5f7fa;
  position: relative;
`;

const styleCardTitle = css`
  color: #1b2559;
  font-weight: 900;
  font-size: 20px;
`;

const styleActionContainer = css`
  margin-top: 10px;
`;

const styleButtonContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* bottom: -10px; */
`;

const styleFillButton = css`
  background: #112df2;
  color: white;
  border-radius: 8px;
`;
const styleBorderButton = css`
  border: 1px solid #112df2;
  border-radius: 8px;
  color: #112df2;
`;

const styleButton = css`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

const stylePrice = css`
  color: #ff313c;
  font-size: 20px;
  font-weight: 900;
`;

const styleText = css`
  font-size: 14px;
  color: #8f9bba;
`;

const styleSoldOut = css`
  margin-bottom: 8px;
`;