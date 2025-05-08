import { mastra } from "./mastra"



(async () => {
    const agent = mastra.getAgent('adExpressionChecker');

    const example = 'このサプリは絶対に治る！ \n太く飲めば効果倍増。';

    const result = await agent.generate(example);

    console.log('フィードバック：', result.text);
})();
