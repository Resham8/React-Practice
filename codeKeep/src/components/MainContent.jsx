import { useState } from "react"
import { CheckIcon, ChevronDownIcon, FilterIcon, LockIcon, PlayIcon, RefreshIcon, StarIcon } from "./icons"

export default function LeetCodeUI() {
  const [showFilter, setShowFilter] = useState(false)
  const [statusFilters, setStatusFilters] = useState({
    todo: false,
    solved: false,
    attempted: false,
  })
  const [difficultyFilters, setDifficultyFilters] = useState({
    easy: true,
    medium: false,
    hard: false,
  })
  const [showTags, setShowTags] = useState(false)

  const problems = [
    { id: 1, number: 14, title: "Longest Common Prefix", difficulty: "Easy", completed: true },
    { id: 2, number: 217, title: "Contains Duplicate", difficulty: "Easy", completed: true },
    { id: 3, number: 125, title: "Valid Palindrome", difficulty: "Easy", completed: true },
    { id: 4, number: 26, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", completed: true },
    { id: 5, number: 66, title: "Plus One", difficulty: "Easy", completed: true },
    { id: 6, number: 136, title: "Single Number", difficulty: "Easy", completed: true },
    { id: 7, number: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", completed: true },
    { id: 8, number: 88, title: "Merge Sorted Array", difficulty: "Easy", completed: true },
    { id: 9, number: 69, title: "Sqrt(x)", difficulty: "Easy", completed: true },
    { id: 10, number: 206, title: "Reverse Linked List", difficulty: "Easy", completed: true },
    { id: 11, number: 141, title: "Linked List Cycle", difficulty: "Easy", completed: true },
  ]

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  const resetFilters = () => {
    setStatusFilters({
      todo: false,
      solved: false,
      attempted: false,
    })
    setDifficultyFilters({
      easy: true,
      medium: false,
      hard: false,
    })
    setShowTags(false)
  }

  const filteredProblems = problems.filter((problem) => {
    const statusFilterApplied = statusFilters.todo || statusFilters.solved || statusFilters.attempted

    const difficultyFilterApplied = difficultyFilters.easy || difficultyFilters.medium || difficultyFilters.hard

    const passesStatusFilter =
      !statusFilterApplied ||
      (statusFilters.solved && problem.completed) ||
      (statusFilters.todo && !problem.completed) ||
      (statusFilters.attempted && false)
    
    const passesDifficultyFilter =
      !difficultyFilterApplied ||
      (difficultyFilters.easy && problem.difficulty === "Easy") ||
      (difficultyFilters.medium && problem.difficulty === "Medium") ||
      (difficultyFilters.hard && problem.difficulty === "Hard")

    return passesStatusFilter && passesDifficultyFilter
  })

  return (
    <div className="flex min-h-screen text-white">
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6">
     
          <div className="bg-[#1e1e1e] rounded-lg p-6">
            <div className="flex flex-col mb-6">
              <div className="w-20 h-20 bg-white rounded-md flex items-center justify-center mb-4">
                <StarIcon className="w-12 h-12 text-yellow-400" />
              </div>
              <h1 className="text-4xl font-bold mb-2">Favorite</h1>
              <div className="flex items-center text-gray-400 mb-4">
                <span>Sumana</span>
                <span className="mx-2">·</span>
                <span>19 questions</span>
                <span className="mx-2">·</span>
                <button className="flex items-center">
                  <LockIcon className="h-4 w-4 mr-1" />
                  Private
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium">
                  <PlayIcon className="w-4 h-4" />
                  Practice
                </button>
                <button className="bg-[#282828] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Progress</h2>
                <button className="text-gray-400 hover:text-white">
                  <RefreshIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                <div className="bg-[#282828] rounded-lg p-6">
                  <div className="flex items-center justify-center">
                    <div className="relative w-40 h-40">
                    
                      <div className="absolute inset-0 rounded-full border-8 border-gray-700"></div>
                     
                      <div
                        className="absolute inset-0 rounded-full border-8"
                        style={{
                          borderColor: "transparent",
                          background: "conic-gradient(#06b6d4 0%, #fbbf24 50%, #ef4444 85%, #ef4444 100%)",
                          clipPath: "polygon(50% 50%, 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0)",
                          mask: "radial-gradient(transparent 55%, black 55%)",
                        }}
                      ></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-4xl font-bold">85</div>
                        <div className="text-sm text-gray-400">.42%</div>
                        <div className="text-gray-300 mt-1">
                          <span>Acceptance</span>
                        </div>
                        <div className="text-gray-400 text-sm mt-2">
                          <span>96</span> submission
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#282828] rounded-lg p-3 flex justify-between items-center">
                    <span className="text-green-500">Easy</span>
                    <span className="font-medium">11/11</span>
                  </div>
                  <div className="bg-[#282828] rounded-lg p-3 flex justify-between items-center">
                    <span className="text-yellow-500">Med.</span>
                    <span className="font-medium">7/7</span>
                  </div>
                  <div className="bg-[#282828] rounded-lg p-3 flex justify-between items-center">
                    <span className="text-red-500">Hard</span>
                    <span className="font-medium">1/1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div>
            <div className="flex justify-end mb-4 gap-2">
              <button
                onClick={toggleFilter}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium"
              >
                <FilterIcon className="w-4 h-4" />
                Filter
              </button>
              <div className="bg-[#282828] text-gray-300 px-4 py-2 rounded-full flex items-center gap-2">
                Easy
                <div className="w-4 h-4 rounded-full bg-gray-500"></div>
              </div>

            
              {showFilter && (
                <div className="absolute top-24 right-8 w-80 bg-[#282828] rounded-lg shadow-lg z-10 p-4">
                  <h3 className="text-lg font-medium mb-4">Status</h3>
                  <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-sm"
                        checked={statusFilters.todo}
                        onChange={() => setStatusFilters({ ...statusFilters, todo: !statusFilters.todo })}
                      />
                      <span>Todo</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-sm"
                        checked={statusFilters.solved}
                        onChange={() => setStatusFilters({ ...statusFilters, solved: !statusFilters.solved })}
                      />
                      <span>Solved</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-sm"
                        checked={statusFilters.attempted}
                        onChange={() => setStatusFilters({ ...statusFilters, attempted: !statusFilters.attempted })}
                      />
                      <span>Attempted</span>
                    </label>
                  </div>

                  <h3 className="text-lg font-medium mb-4">Difficulty</h3>
                  <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-sm"
                        checked={difficultyFilters.easy}
                        onChange={() => setDifficultyFilters({ ...difficultyFilters, easy: !difficultyFilters.easy })}
                      />
                      <span className="text-green-500">Easy</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-sm"
                        checked={difficultyFilters.medium}
                        onChange={() =>
                          setDifficultyFilters({ ...difficultyFilters, medium: !difficultyFilters.medium })
                        }
                      />
                      <span className="text-yellow-500">Medium</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-sm"
                        checked={difficultyFilters.hard}
                        onChange={() => setDifficultyFilters({ ...difficultyFilters, hard: !difficultyFilters.hard })}
                      />
                      <span className="text-red-500">Hard</span>
                    </label>
                  </div>

                  <label className="flex items-center gap-2 mb-6">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-sm"
                      checked={showTags}
                      onChange={() => setShowTags(!showTags)}
                    />
                    <span>Show tags</span>
                  </label>

                  <button onClick={resetFilters} className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <RefreshIcon className="w-5 h-5" />
                    Reset
                  </button>
                </div>
              )}
            </div>

           
            <div className="space-y-2">
              {filteredProblems.map((problem) => (
                <div key={problem.id} className="flex items-center justify-between bg-[#1e1e1e] p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="font-medium">
                      {problem.number}. {problem.title}
                    </span>
                  </div>
                  <span
                    className={`
                    ${problem.difficulty === "Easy" ? "text-green-500" : ""}
                    ${problem.difficulty === "Medium" ? "text-yellow-500" : ""}
                    ${problem.difficulty === "Hard" ? "text-red-500" : ""}
                  `}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
