import type { Challenge } from '@/type'
import { FC, useCallback, useMemo } from 'react'
import MdViewer from './MdViewer'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '../ui/button'
import {
  getCurrentChallengeNum,
  getNextChallenge,
  getPrevChallenge
} from '@/challenges'
import { RESULT_STATUS_ENUM } from '@/sql/result'
import mainChallenges from '@/challenges/mainChallenges'
import { useNavigate } from '@tanstack/react-router'
import clsx from 'clsx'

interface SqlQuestionProps {
  resultStatus: number
  challenge: Challenge
}

const SqlQuestion: FC<SqlQuestionProps> = ({ resultStatus, challenge }) => {
  const navigate = useNavigate()
  const challengeNum = useMemo(() => {
    return getCurrentChallengeNum(challenge)
  }, [challenge])

  const jumpTo = useCallback(
    (type: 'prev' | 'next') => {
      let willToChallenge
      if (type === 'prev') {
        willToChallenge = getPrevChallenge(challenge)
      } else {
        willToChallenge = getNextChallenge(challenge)
      }
      navigate({
        to: `/select-challenge/$challengeId`,
        params: {
          challengeId: willToChallenge.id
        }
      })
    },
    [challenge, navigate]
  )
  const handleWin = () => {
    alert('恭喜通关，如果对你有帮助，欢迎给个star')
    window.open('https://github.com/learner-next/sql-challenge')
  }
  const btnClassName = clsx(
    'mt-4 flex mb-4',
    challengeNum === mainChallenges.length - 1
      ? 'justify-center'
      : 'px-2 justify-between'
  )
  return challenge ? (
    <div className="mr-2 w-1/2 rounded-md border border-gray-300">
      <ScrollArea className="p-2" style={{ height: 'calc(100vh - 125px)' }}>
        <MdViewer content={challenge.content} />
      </ScrollArea>
      <div className={btnClassName}>
        {challengeNum !== mainChallenges.length - 1 && (
          <>
            <Button
              className="w-[80px]"
              style={{ visibility: challengeNum > 0 ? 'visible' : 'hidden' }}
              onClick={() => jumpTo('prev')}
            >
              上一关
            </Button>
            <Button
              className="w-[80px]"
              style={{
                visibility:
                  challengeNum < mainChallenges.length - 1
                    ? 'visible'
                    : 'hidden'
              }}
              disabled={resultStatus !== RESULT_STATUS_ENUM.SUCCEED}
              onClick={() => jumpTo('next')}
            >
              下一关
            </Button>
          </>
        )}
        {challengeNum === mainChallenges.length - 1 &&
          resultStatus === RESULT_STATUS_ENUM.SUCCEED && (
            <Button onClick={handleWin}>恭喜通关</Button>
          )}
      </div>
    </div>
  ) : (
    <div>加载失败</div>
  )
}

export default SqlQuestion
