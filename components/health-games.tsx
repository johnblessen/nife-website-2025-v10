"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Award, Heart, Activity, Trophy } from "lucide-react"

export default function HealthGames() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const quizzes = [
    {
      id: "quiz1",
      title: "Health Knowledge Quiz",
      description: "Test your knowledge about general health",
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      reward: "100 Gold Coins",
      questions: [
        {
          question: "What is the recommended daily water intake for adults?",
          options: ["1-2 liters", "2-3 liters", "3-4 liters", "4-5 liters"],
          answer: 1,
        },
        {
          question: "Which vitamin is produced when your skin is exposed to sunlight?",
          options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          answer: 3,
        },
        {
          question: "What is the normal resting heart rate for adults?",
          options: ["40-50 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
          answer: 1,
        },
      ],
    },
    {
      id: "quiz2",
      title: "Nutrition Challenge",
      description: "Test your knowledge about food and nutrition",
      icon: <Heart className="h-6 w-6 text-purple-600" />,
      reward: "150 Gold Coins",
      questions: [
        {
          question: "Which of these foods is highest in protein?",
          options: ["Rice", "Potatoes", "Chicken breast", "Apples"],
          answer: 2,
        },
        {
          question: "Which nutrient provides the most energy per gram?",
          options: ["Carbohydrates", "Protein", "Fat", "Fiber"],
          answer: 2,
        },
        {
          question: "Which of these is NOT a whole grain?",
          options: ["Brown rice", "Quinoa", "White bread", "Oats"],
          answer: 2,
        },
      ],
    },
    {
      id: "quiz3",
      title: "Fitness Challenge",
      description: "Test your knowledge about exercise and fitness",
      icon: <Activity className="h-6 w-6 text-purple-600" />,
      reward: "200 Gold Coins",
      questions: [
        {
          question: "What type of exercise is best for building muscle strength?",
          options: ["Cardio", "Resistance training", "Yoga", "Swimming"],
          answer: 1,
        },
        {
          question: "How many steps per day is generally recommended for good health?",
          options: ["2,000", "5,000", "10,000", "20,000"],
          answer: 2,
        },
        {
          question: "Which exercise is considered a compound movement?",
          options: ["Bicep curls", "Leg extensions", "Squats", "Calf raises"],
          answer: 2,
        },
      ],
    },
    {
      id: "quiz4",
      title: "Mental Health Awareness",
      description: "Test your knowledge about mental wellbeing",
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      reward: "150 Gold Coins",
      questions: [
        {
          question: "Which of these is a common symptom of anxiety?",
          options: ["Increased appetite", "Rapid heartbeat", "Decreased energy", "Memory loss"],
          answer: 1,
        },
        {
          question: "What is mindfulness?",
          options: [
            "Thinking about the future",
            "Focusing on the past",
            "Being aware of the present moment",
            "Avoiding negative thoughts",
          ],
          answer: 2,
        },
        {
          question: "Which activity can help reduce stress?",
          options: ["Using social media", "Skipping meals", "Deep breathing exercises", "Consuming caffeine"],
          answer: 2,
        },
      ],
    },
  ]

  const startQuiz = (quizId: string) => {
    setActiveQuiz(quizId)
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
  }

  const handleAnswer = (answerIndex: number) => {
    const quiz = quizzes.find((q) => q.id === activeQuiz)
    if (!quiz) return

    if (answerIndex === quiz.questions[currentQuestion].answer) {
      setScore(score + 1)
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setActiveQuiz(null)
    setShowResult(false)
  }

  const getActiveQuiz = () => quizzes.find((q) => q.id === activeQuiz)

  return (
    <div>
      {!activeQuiz ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  {quiz.icon}
                </div>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  <span>Reward: {quiz.reward}</span>
                </div>
                <div className="mt-4 text-sm text-gray-500">{quiz.questions.length} questions</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => startQuiz(quiz.id)}>
                  Start Quiz
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : showResult ? (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Quiz Results</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto">
              <Award className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">
              You scored {score} out of {getActiveQuiz()?.questions.length}!
            </h3>
            {score === getActiveQuiz()?.questions.length ? (
              <div className="text-green-600 font-medium">Perfect score! You've earned {getActiveQuiz()?.reward}</div>
            ) : score >= Math.floor(getActiveQuiz()?.questions.length! / 2) ? (
              <div className="text-yellow-600 font-medium">
                Good job! You've earned{" "}
                {Math.floor(
                  Number.parseInt(getActiveQuiz()?.reward?.split(" ")[0]!) *
                    (score / getActiveQuiz()?.questions.length!),
                )}{" "}
                Gold Coins
              </div>
            ) : (
              <div className="text-gray-600">Try again to earn more coins!</div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button variant="outline" onClick={resetQuiz}>
              Back to Games
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                setCurrentQuestion(0)
                setScore(0)
                setShowResult(false)
              }}
            >
              Try Again
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{getActiveQuiz()?.title}</CardTitle>
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {getActiveQuiz()?.questions.length}
              </div>
            </div>
            <Progress value={((currentQuestion + 1) / getActiveQuiz()?.questions.length!) * 100} className="h-2 mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <h3 className="text-xl font-medium">{getActiveQuiz()?.questions[currentQuestion].question}</h3>
            <div className="space-y-3">
              {getActiveQuiz()?.questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={resetQuiz}>
              Cancel Quiz
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
