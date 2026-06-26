import type { ChatMessage } from '@/types';
import type { ReactNode } from 'react';

interface MessageBubbleProps {
  message: ChatMessage;
}

function formatContent(content: string): ReactNode {
  // Convert **text** to bold and \n to line breaks
  const lines = content.split('\n');
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith('**') && part.endsWith('**') ? (
                <strong key={j} className="font-semibold">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {/* Bot avatar */}
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-500 to-violet-600 flex items-center justify-center text-xs shrink-0 mr-2 mt-1 shadow-sm">
          🤖
        </div>
      )}

      <div
        className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
          isUser
            ? 'bg-linear-to-r from-blue-500 to-violet-600 text-white rounded-br-sm'
            : 'bg-white dark:bg-slate-700/80 text-slate-800 dark:text-slate-100 border border-slate-100 dark:border-slate-600/40 rounded-bl-sm'
        }`}
      >
        {formatContent(message.content)}
        <p className={`text-[10px] mt-1.5 ${isUser ? 'text-blue-100' : 'text-slate-400'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      {/* User avatar */}
      {isUser && (
        <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-xs shrink-0 ml-2 mt-1">
          👤
        </div>
      )}
    </div>
  );
}
