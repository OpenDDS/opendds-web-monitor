
// -*- C++ -*-
// $Id$
// Definition for Win32 Export directives.
// This file is generated automatically by generate_export_file.pl Nexmatix
// ------------------------------
#ifndef NEXMATIX_EXPORT_H
#define NEXMATIX_EXPORT_H

#include "ace/config-all.h"

#if defined (ACE_AS_STATIC_LIBS) && !defined (NEXMATIX_HAS_DLL)
#  define NEXMATIX_HAS_DLL 0
#endif /* ACE_AS_STATIC_LIBS && NEXMATIX_HAS_DLL */

#if !defined (NEXMATIX_HAS_DLL)
#  define NEXMATIX_HAS_DLL 1
#endif /* ! NEXMATIX_HAS_DLL */

#if defined (NEXMATIX_HAS_DLL) && (NEXMATIX_HAS_DLL == 1)
#  if defined (NEXMATIX_BUILD_DLL)
#    define Nexmatix_Export ACE_Proper_Export_Flag
#    define NEXMATIX_SINGLETON_DECLARATION(T) ACE_EXPORT_SINGLETON_DECLARATION (T)
#    define NEXMATIX_SINGLETON_DECLARE(SINGLETON_TYPE, CLASS, LOCK) ACE_EXPORT_SINGLETON_DECLARE(SINGLETON_TYPE, CLASS, LOCK)
#  else /* NEXMATIX_BUILD_DLL */
#    define Nexmatix_Export ACE_Proper_Import_Flag
#    define NEXMATIX_SINGLETON_DECLARATION(T) ACE_IMPORT_SINGLETON_DECLARATION (T)
#    define NEXMATIX_SINGLETON_DECLARE(SINGLETON_TYPE, CLASS, LOCK) ACE_IMPORT_SINGLETON_DECLARE(SINGLETON_TYPE, CLASS, LOCK)
#  endif /* NEXMATIX_BUILD_DLL */
#else /* NEXMATIX_HAS_DLL == 1 */
#  define Nexmatix_Export
#  define NEXMATIX_SINGLETON_DECLARATION(T)
#  define NEXMATIX_SINGLETON_DECLARE(SINGLETON_TYPE, CLASS, LOCK)
#endif /* NEXMATIX_HAS_DLL == 1 */

// Set NEXMATIX_NTRACE = 0 to turn on library specific tracing even if
// tracing is turned off for ACE.
#if !defined (NEXMATIX_NTRACE)
#  if (ACE_NTRACE == 1)
#    define NEXMATIX_NTRACE 1
#  else /* (ACE_NTRACE == 1) */
#    define NEXMATIX_NTRACE 0
#  endif /* (ACE_NTRACE == 1) */
#endif /* !NEXMATIX_NTRACE */

#if (NEXMATIX_NTRACE == 1)
#  define NEXMATIX_TRACE(X)
#else /* (NEXMATIX_NTRACE == 1) */
#  if !defined (ACE_HAS_TRACE)
#    define ACE_HAS_TRACE
#  endif /* ACE_HAS_TRACE */
#  define NEXMATIX_TRACE(X) ACE_TRACE_IMPL(X)
#  include "ace/Trace.h"
#endif /* (NEXMATIX_NTRACE == 1) */

#endif /* NEXMATIX_EXPORT_H */

// End of auto generated file.
