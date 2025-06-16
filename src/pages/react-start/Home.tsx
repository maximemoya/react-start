import React from 'react';
import PlacesList from '../../components/placeList/PlacesList';
import PlaceCarousel from '../../components/placeCarousel/PlaceCarousel';

const samplePlaces = [
    {
        id: 1,
        imageUrl: "https://qcloud.dpfile.com/pc/cTxhWTNFqdpYsu1_uLivKlp2REHOZCQo-CGuTJBBUtINStDxM9pmIO-wKovgxTy_0pWA5k_Rl4JOAjKzyGaYog.jpg",
        title: "Greedy Cup Cafe",
        description: "漂亮咖啡店😻☕️",
        address: "沈阳",
        alt: "照片"
    },
    {
        id: 2,
        imageUrl: "https://qcloud.dpfile.com/pc/VXh31iv1tfuBnvnYsqnxKobsYhSDhQnDqEJKH8t6wHNZHLU1Fmwc09ZrvvYFaHOC.jpg",
        title: "人类需要咖啡沈阳",
        description: "Human needs coffee",
        address: "沈阳",
        alt: "照片"
    },
    {
        id: 3,
        imageUrl: "https://qcloud.dpfile.com/pc/pf8l-cK7Zt3gJgyHqOnjtVmMKPtPiQtljuHHqd5BPSVXwPOWtnn0FOdUMbwNw3H0.jpg",
        title: "十一咖啡",
        description: "Eleven café",
        address: "沈阳",
        alt: "照片"
    },
    {
        id: 4,
        imageUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2Ffa640541-2b8a-9d24-e4fc-5d526b8bce2a%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1752673540&t=89d59d447aefa3ebaaf3283fae2919d1",
        title: "talk talk",
        description: "漂亮猫猫😻",
        address: "沈阳",
        alt: "照片"
    },
    {
        id: 5,
        imageUrl: "https://qcloud.dpfile.com/pc/8_MWIs0DcOEgm594S_aNgSgDNmm7T2ZUblx6VCWMZdoStlc3tb2D46EPS2wRcTFF.jpg",
        title: "手作咖啡",
        description: "hand made coffee",
        address: "沈阳",
        addressLink: "https://map.baidu.com/poi/%E6%B2%88%E9%98%B3%E6%89%8B%E4%BD%9C%E5%92%96%E5%95%A1(%E6%98%A5%E5%A4%A9%E5%BA%97)/@13744081.67,5103566.36,12.95z?uid=a7cae5808c0d50f8d6b74ed5&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl",
        alt: "照片"
    }
];

const Home: React.FC = () => {
    return (
        <div>
            <h1>沈阳咖啡店</h1>
            <PlaceCarousel places={samplePlaces} />
        </div>
    );
};

export default Home;