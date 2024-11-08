interface TerminalMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function TerminalMessage({ role, content }: TerminalMessageProps) {
  return (
    <div className={`mb-2 ${role === 'assistant' ? 'pl-4' : ''}`}>
      <div className="flex items-start gap-2">
        <span className="text-sm font-mono text-violet-400 shrink-0">
          {role === 'user' ? '>' : 'Steve>'}
        </span>
        <p className="text-sm text-gray-300 font-mono whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  );
}