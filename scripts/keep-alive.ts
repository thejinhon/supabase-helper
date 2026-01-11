
import { createClient } from "@supabase/supabase-js";

// 只需要这两个变量就能连接，跟你的表结构没关系
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ 缺少环境变量");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function keepAlive() {
  console.log(`[${new Date().toISOString()}] 开始执行保活...`);
  // 随便请求一下 Auth 接口，这就足以证明“我是活跃的”
  const { error } = await supabase.auth.getUser();
  console.log("✅ 保活请求发送完毕");
}

keepAlive();
