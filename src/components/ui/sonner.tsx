'use client';

import {
  CircleCheckIcon,
  CircleEllipsisIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { Toaster as Sonner, useSonner, type ToasterProps } from 'sonner';
import styles from './sonner.module.css';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <>
      <EnsureDefaultIcon />
      <Sonner
        theme={theme as ToasterProps['theme']}
        className={`${styles.toaster} group`}
        icons={{
          success: <CircleCheckIcon className="size-4" />,
          info: <InfoIcon className="size-4" />,
          warning: <TriangleAlertIcon className="size-4" />,
          error: <OctagonXIcon className="size-4" />,
          loading: <Loader2Icon className="size-4 animate-spin" />
        }}
        style={
          {
            // you can uncomment these lines if you want to use custom CSS variables to control the default toast colors
            // '--normal-bg': 'var(--popover)',
            // '--normal-text': 'var(--popover-foreground)',
            // '--normal-border': 'var(--border)',
            '--border-radius': 'var(--radius)'
          } as React.CSSProperties
        }
        toastOptions={{
          className: styles.toast,
          classNames: {
            success: styles.success,
            info: styles.info,
            warning: styles.warning,
            error: styles.error,
            loading: styles.loading,
            closeButton: styles.closeBtn,
            actionButton: styles.actionBtn,
            cancelButton: styles.cancelBtn,
            content: styles.content,
            title: styles.title,
            description: styles.description,
            icon: styles.icon
          }
        }}
        visibleToasts={6}
        duration={5000}
        {...props}
      />
    </>
  );
};

type ToastTypes = NonNullable<
  ReturnType<typeof useSonner>['toasts'][number]['type']
>;

const SONNER_ICON_SUPPORTED_TYPES = new Set<ToastTypes>([
  'success',
  'info',
  'warning',
  'error',
  'loading'
]);

function EnsureDefaultIcon() {
  const { toasts } = useSonner();

  useEffect(() => {
    // Intentionally mutates Sonner toast objects.
    // Relies on current Sonner behavior: toast objects are mutable and reused across renders.
    // This effect is idempotent.
    //
    // Ensures a default icon for toasts that:
    // - have no explicit icon or jsx
    // - and either have no type, or use a type not supported by Sonner’s built-in icons
    toasts.forEach((toast) => {
      if (
        toast.type !== undefined &&
        SONNER_ICON_SUPPORTED_TYPES.has(toast.type)
      )
        return;
      if (toast.icon !== undefined) return;
      if (toast.jsx !== undefined) return;

      toast.icon = <CircleEllipsisIcon className="size-4" />;
    });
  }, [toasts]);

  return null;
}

export { Toaster };
