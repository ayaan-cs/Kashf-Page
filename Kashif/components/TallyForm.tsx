interface TallyFormProps {
  formId: string;
  className?: string;
}

export function TallyForm({ formId, className = '' }: TallyFormProps) {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src={`https://tally.so/embed/${formId}?hideTitle=1&transparentBackground=1&alignLeft=1`}
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Join the Beta"
        className="rounded-2xl"
        style={{
          background: 'transparent',
        }}
      />
    </div>
  );
}
