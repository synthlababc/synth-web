import Card from "./components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 relative pt-20">
      <div className={"bg-blue-300 p-4 rounded-lg h-80"}>
        <h1 className="text-3xl font-bold text-white text-center pt-10">我曾经经历过和你一样的处境</h1>
        <p className="text-white text-center pt-20 text-xl	">当我开始编程时，我遇到了很多困难。有些课程让我感到困惑、无聊、失去动力与兴趣，如果这些课程无法让你产生兴趣，
          你可以选择其他博主的视频，不同人的教育方式可能对不同的人产生不同的影响，千万不要怀疑你自己和放弃，如果感到迷茫那就去学习和充实自己吧。</p>
      </div>

      {/* New Section */}
      <div className="pt-20">
        <h2 className="text-2xl font-semibold text-center mb-8">探索web3领域</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card
            title="编程语言"
            description="golang、rust、solidity"
          />
          <Card
            title="开源项目"
            description="bitcoin、ethereum、solana"
          />
          <Card
            title="个人项目"
            description="nft市场、Uniswap、钱包"
          />
        </div>
      </div>

      {/* New Section */}
      <div className="pt-20">
        <h2 className="text-2xl font-semibold text-center mb-8">探索ai领域</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card
            title="编程语言"
            description="python、golang、rust"
          />
          <Card
            title="开发框架"
            description="langchain、ollama、PyTorch"
          />
          <Card
            title="个人项目"
            description="聊天机器人、本地知识问答系统"
          />
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col items-center w-full mx-auto pt-20 pb-10" >
        <h2 className="text-2xl font-semibold mb-2">联系我</h2>
        <p className="text-lg mb-4">
          如果你有任何疑问可以通过下面的邮件联系到我
        </p>
        <a href="mailto:synthlababc@gmail.com" className="text-blue-500 hover:underline">
          synthlababc@gmail.com
        </a>
      </div>
    </div >



  );
}