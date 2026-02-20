'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { locations } from '@/services/locations';

const AL_KHALEEJ_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1787!2d55.3195!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7b1c4e4e5%3A0x1234567890abcdef!2sAl%20Khaleej%20Bldg!5e0!3m2!1sen!2sae!4v1234567890';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // Simulate form submission - replace with your API/Formspree/etc.
      await new Promise((r) => setTimeout(r, 800));
      setIsSuccess(true);
      setFormState({ name: '', phone: '', email: '', company: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const dubaiOffice = locations.find((l) => l.id === 'dubai');

  return (
    <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left: Contact info + Map */}
      

      {/* Right: Contact Form */}
      <div className="glass-card rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/5 md:p-8">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Icon icon="solar:check-circle-linear" width="32" strokeWidth="1.5" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              Message sent successfully
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <FieldGroup>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field data-invalid={!!errors.name}>
                  <FieldLabel htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name
                  </FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formState.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <FieldError>{errors.name}</FieldError>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Phone
                  </FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <FieldError>{errors.email}</FieldError>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="company" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Company
                  </FieldLabel>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="subject" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Subject
                </FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                />
              </Field>

              <Field data-invalid={!!errors.message}>
                <FieldLabel htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <FieldError>{errors.message}</FieldError>}
              </Field>
            </FieldGroup>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-zinc-700 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>





      <div className="space-y-6">
 

        {dubaiOffice && (
          <div className="flex items-start gap-3">
            <Icon
              icon="solar:map-point-linear"
              className="mt-0.5 shrink-0 text-zinc-600 dark:text-zinc-400"
              width="20"
              strokeWidth="1.5"
            />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {dubaiOffice.address}
              <br />
              Dubai
            </p>
          </div>
        )}

        <div>
          <p className="mb-2 text-sm font-medium text-zinc-900 dark:text-white">Follow us on</p>
          <a
            href="https://www.linkedin.com/company/tawazon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-900 text-white transition-colors hover:bg-zinc-700 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" width="20" />
          </a>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-white/10">
          <iframe
            src={AL_KHALEEJ_MAP_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tawazon Dubai Office"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
