import { convertFiles } from "./services/conversionService";

(async () => {
    const filePaths = ['data/regulations.pdf', 'data/sample_ad.jpg'];
    const metadata = { category: '薬', advertiser: '株式会社サンプル'};

    const conversion = await convertFiles(filePaths, metadata);
    console.log(JSON.stringify(conversion, null, 2));
})();