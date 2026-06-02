export default function Home() {
  return (
    <main className="p-4">
      <header className="my-2">
        <h1 className="text-2xl">mtzw.jp</h1>
      </header>
      <ul className="space-y-1">
        <li>
          <a href="https://github.com/mtzw" className="no-underline hover:underline">
            github/mtzw
          </a>
        </li>
        <li>
          <a href="/unitconv.html" className="no-underline hover:underline">
            単位換算一覧表
          </a>
        </li>
      </ul>
    </main>
  );
}
